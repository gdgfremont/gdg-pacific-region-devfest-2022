import { heroSettings } from '../../utils/data';
import { UiState } from './types';

export const initialUiState: UiState = {
  heroSettings: {
    backgroundColor: heroSettings.home.background.color,
    backgroundImage: heroSettings.home.background.image,
    fontColor: heroSettings.home.fontColor,
    hideLogo: false,
  },
  videoDialog: {
    open: false,
    youtubeId: '',
    playlistId: '',
    title: '',
  },
  viewport: {
    isPhone: true,
    isTabletPlus: false,
    isLaptopPlus: false,
  },
};
