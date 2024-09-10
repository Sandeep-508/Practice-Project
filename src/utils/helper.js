import { FACEBOOK_PATH_URL, TWITTER_PATH_URL, YOUTUBE_PATH_URL } from "./constant";
import facebookSvg from '../assets/images/svg/facebook-svg.svg'
import twitterSvg from '../assets/images/svg/twitter-svg.svg'
import YoutubeSvg from '../assets/images/svg/youtube-svg.svg'

export const NAVBAR_DATA = [
    {
        images: facebookSvg,
        url: FACEBOOK_PATH_URL
    },
    {
        images: YoutubeSvg,
        url: YOUTUBE_PATH_URL
    },
    {
        images: twitterSvg,
        url: TWITTER_PATH_URL
    },
]