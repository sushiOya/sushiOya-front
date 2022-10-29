import Image from 'next/image';
import { styles } from './index.styles';

type Props = {
  alt: string;
  imagePath: string;
  width?: number;
  height?: number;
};

const ImageView = ({
  imagePath,
  alt,
  width = 140,
  height = 168,
}: Props): JSX.Element => {
  return (
    <div css={styles.container}>
      <Image
        src={imagePath}
        alt={alt}
        layout={'fixed'}
        width={width}
        height={height}
      />
    </div>
  );
};

export default ImageView;