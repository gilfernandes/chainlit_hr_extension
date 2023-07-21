import { useRecoilValue } from 'recoil';

import LogoDarkOnepoint from 'assets/logo-one-point.png';
import LogoLightOnepoint from 'assets/logo-one-point.png';

import { settingsState } from 'state/settings';

interface Props {
  width?: number;
  style?: React.CSSProperties;
}

export const Logo = ({ width, style }: Props) => {
  const { theme } = useRecoilValue(settingsState);
  const src = theme === 'light' ? LogoLightOnepoint : LogoDarkOnepoint;
  return <img src={src} style={style} width={width || 40} />;
};
