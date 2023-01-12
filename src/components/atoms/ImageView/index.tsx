import Image from 'next/image';
import NoImage from '../../../assets/images/no_image.svg';
import { styles } from './index.styles';

type Props = {
  alt: string;
  imagePath?: string;
  width?: number;
  height?: number;
  marked?: boolean;
};

const ImageView = ({
  imagePath = NoImage,
  alt,
  width = 140,
  height = 168,
}: Props): JSX.Element => {
  return (
    <>
      <div css={styles.container({ width, height })}>
        {imagePath ? (
          <Image
            src={imagePath}
            alt={alt}
            layout={'fixed'}
            width={width}
            height={height}
            unoptimized
          />
        ) : (
          <div css={styles.logoWrapper} />
        )}
      </div>
    </>
  );
};

export default ImageView;
