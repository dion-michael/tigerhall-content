import getCompletedPercentage from '../helpers/getCompletedPercentage';
import parseImageUrl from '../helpers/parseImageUrl';
import secondsToMinutes, {
  getPodcastDuration
} from '../helpers/secondsToMinutes';

describe('helper functions test', () => {
  describe('getCompletedPercentage', () => {
    it('should return correct value', () => {
      const percentage = getCompletedPercentage(20, 100);
      expect(percentage).toEqual(20);
    });
  });

  describe('parseImageUrl', () => {
    it('return value should contain resize/250x', () => {
      const imageUrl =
        'https://images.staging.tigerhall.io/users/2023-09-13/7f7ec0b5-c32c-4f70-89ed-c7f80925c449-460114c6-a8d7-498c-8541-567e82bc4069.png';
      const url = parseImageUrl(imageUrl);
      expect(url).toContain('resize/250x');
    });
  });

  describe('secondsToMinutes', () => {
    it('should return correct value', () => {
      const seconds = 124;
      const minute = getPodcastDuration(seconds);
      expect(minute).toEqual('2m');
    });

    it('should return seconds if below 60', () => {
      const seconds = 50;
      const minute = getPodcastDuration(seconds);
      expect(minute).toEqual('50s');
    });
  });
});
