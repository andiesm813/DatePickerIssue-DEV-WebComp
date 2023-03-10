export default class MovieAppService {
  public getNowPlaying = async (): Promise<any> => {
    const response = await fetch('https://excel2json.io/api/share/15755be7-cee3-4b74-4382-08da496bf5f2');
    if (!response.ok) {
      return Promise.resolve(null);
    }
    return response.json();
  }
}
