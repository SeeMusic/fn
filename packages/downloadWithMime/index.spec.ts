import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

import downloadWithMime from './index';

// 模拟 DOM 相关操作
const mockCreateObjectURL = vi.fn(() => 'blob:mock-url');
const mockRevokeObjectURL = vi.fn();
const mockClick = vi.fn();
const mockAppendChild = vi.fn();
const mockRemoveChild = vi.fn();

// 使用更简单的模拟，通过类型断言处理 TypeScript 类型检查
const mockCreateElement = vi.fn(() => ({
  href: '',
  download: '',
  click: mockClick
})) as unknown as HTMLAnchorElement;

describe('downloadWithMime', () => {
  beforeEach(() => {
    // 使用类型断言来模拟全局对象，避免类型错误
    global.window = {
      URL: {
        createObjectURL: mockCreateObjectURL,
        revokeObjectURL: mockRevokeObjectURL
      }
    } as unknown as globalThis.Window['window'];

    global.document = {
      createElement: mockCreateElement,
      body: {
        appendChild: mockAppendChild,
        removeChild: mockRemoveChild
      }
    } as unknown as globalThis.Document;

    global.URL = global.window.URL;
  });

  afterEach(() => {
    vi.clearAllMocks();
    // 清理模拟的全局对象
    global.window = null as unknown as globalThis.Window['window'];
    global.document = null as unknown as globalThis.Document;
    global.URL = null as unknown as typeof globalThis.URL;
  });

  it('应该成功下载 Excel 文件并设置正确的 MIME 类型', async () => {
    const data = new ArrayBuffer(8);
    const fileName = 'test.xlsx';

    await expect(downloadWithMime(data, fileName)).resolves.not.toThrow();

    expect(mockCreateElement).toHaveBeenCalledWith('a');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const aTag = (mockCreateElement as any).mock.results[0].value;
    expect(aTag.href).toBe('blob:mock-url');
    expect(aTag.download).toBe(fileName);
    expect(mockClick).toHaveBeenCalled();
    expect(mockCreateObjectURL).toHaveBeenCalled();
    expect(mockRevokeObjectURL).toHaveBeenCalledWith('blob:mock-url');
  });

  it('应该成功下载 CSV 文件并设置正确的 MIME 类型', async () => {
    const data = 'col1,col2\nvalue1,value2';
    const fileName = 'data.csv';

    await expect(downloadWithMime(data, fileName)).resolves.not.toThrow();
    expect(mockCreateObjectURL).toHaveBeenCalled();
  });

  it('应该成功下载 PDF 文件并设置正确的 MIME 类型', async () => {
    const data = new Blob(['pdf content'], { type: 'application/pdf' });
    const fileName = 'document.pdf';

    await expect(downloadWithMime(data, fileName)).resolves.not.toThrow();
    expect(mockCreateObjectURL).toHaveBeenCalled();
  });

  it('应该成功下载 Word 文件并设置正确的 MIME 类型', async () => {
    const data = new ArrayBuffer(16);
    const fileName = 'report.docx';

    await expect(downloadWithMime(data, fileName)).resolves.not.toThrow();
    expect(mockCreateObjectURL).toHaveBeenCalled();
  });

  it('应该为未知文件类型使用默认 MIME 类型', async () => {
    const data = 'unknown content';
    const fileName = 'file.unknown';

    await expect(downloadWithMime(data, fileName)).resolves.not.toThrow();
    expect(mockCreateObjectURL).toHaveBeenCalled();
  });

  it('应该为没有扩展名的文件使用默认 MIME 类型', async () => {
    const data = 'file content';
    const fileName = 'filename';

    await expect(downloadWithMime(data, fileName)).resolves.not.toThrow();
    expect(mockCreateObjectURL).toHaveBeenCalled();
  });

  it('应该正确处理多个点的文件名', async () => {
    const data = 'content';
    const fileName = 'archive.tar.gz';

    await expect(downloadWithMime(data, fileName)).resolves.not.toThrow();
    expect(mockCreateObjectURL).toHaveBeenCalled();
  });

  it('当文件名为空时应该拒绝并抛出错误', async () => {
    const data = 'content';

    await expect(downloadWithMime(data, '')).rejects.toThrow('downloadWithMime: fileName is empty');
  });

  it('当文件名为空白字符串时应该拒绝并抛出错误', async () => {
    const data = 'content';

    await expect(downloadWithMime(data, '   ')).rejects.toThrow('downloadWithMime: fileName is empty');
  });

  it('当 Blob 创建失败时应该捕获错误并拒绝', async () => {
    const data = 'content';
    const fileName = 'test.txt';

    // 模拟 Blob 构造函数抛出错误
    const originalBlob = global.Blob;
    global.Blob = vi.fn(() => {
      throw new Error('Blob creation failed');
    });

    await expect(downloadWithMime(data, fileName)).rejects.toThrow('Blob creation failed');

    // 恢复原始 Blob
    global.Blob = originalBlob;
  });
});
