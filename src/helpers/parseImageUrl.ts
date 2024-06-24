const insertIndex = 35;

const parseImageUrl = (url: string) => {
  return (
    url.substring(0, insertIndex) + '/resize/250x' + url.substring(insertIndex)
  );
};

export default parseImageUrl;
