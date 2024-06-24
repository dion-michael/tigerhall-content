const mapPodcastResponse = (response: any) => {
  return response.contentCards.edges;
};

export default mapPodcastResponse;
