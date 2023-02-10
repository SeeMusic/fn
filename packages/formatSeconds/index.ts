import padLeadingZero from "../padLeadingZero";

/**
 * 歌曲时长（秒）转换为播放器显示的 00:00 格式
 * @param {number} seconds
 */
const formatSeconds = (seconds: number): string => {
  let minute: number | string = padLeadingZero(Math.floor(seconds / 60));
  let second: number | string = padLeadingZero(Math.floor(seconds % 60));

  return `${minute}:${second}`;
};

export default formatSeconds;
