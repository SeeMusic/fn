/**
 * 自动根据文件后缀确定 MIME 类型并触发文件下载。
 *
 * @param data 文件流数据（ArrayBuffer, Blob, string, 或任何可构造 Blob 的数据）。
 * @param fileName 带有完整扩展名的文件名，例如 "report.xlsx"。
 * @returns Promise<void>，下载成功解析后 resolve，失败时 reject。
 */
const downloadWithMime = (data: ArrayBuffer | Blob | string, fileName: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (fileName.trim() === '') {
        return reject(new Error('downloadWithMime: fileName is empty'));
    }

    try {
      const parts = fileName.split('.');
      // 如果文件名中没有点，extension 为空字符串
      const extension = parts.length > 1 ? parts.pop()! : '';
      let mimeType = 'application/octet-stream';

      switch (extension.toLowerCase()) {
        case 'xlsx':
        case 'xls':
          mimeType = 'application/vnd.ms-excel';
          break;
        case 'csv':
          mimeType = 'text/csv';
          break;
        case 'pdf':
          mimeType = 'application/pdf';
          break;
        case 'doc':
          mimeType = 'application/msword';
          break;
        case 'docx':
          mimeType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
          break;
        case 'ppt':
          mimeType = 'application/vnd.ms-powerpoint';
          break;
        case 'pptx':
          mimeType = 'application/vnd.openxmlformats-officedocument.presentationml.presentation';
          break;
        case 'txt':
          mimeType = 'text/plain';
          break;
        case 'json':
          mimeType = 'application/json';
          break;
        case 'xml':
          mimeType = 'application/xml';
          break;
        case 'zip':
          mimeType = 'application/zip';
          break;
      }

      const blob = new Blob([data], { type: mimeType });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName; // 使用传入的文件名

      document.body.appendChild(a);
      a.click();

      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
      resolve();
    } catch (error) {
        console.error('downloadWithMime:', error);
        const errorMessage = error instanceof Error ? error.message : 'unknown error';
        reject(new Error(errorMessage));
    }
  });
};

export default downloadWithMime;
