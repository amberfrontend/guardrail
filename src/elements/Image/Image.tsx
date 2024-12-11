type TypeProps =
  | {
      alt: string;
      type: 'informative';
    }
  | {
      type: 'decorative';
    };

type SharedProps = {
  src: string;
};

type ImageProps = TypeProps & SharedProps;

export default function Image(props: ImageProps) {
  const { src, type } = props;

  if (type === 'informative' && props.alt === '') {
    throw new Error('Informative image cannot have empty alt text.');
  }

  return <img src={src} alt={type === 'informative' ? props.alt : ''} />;
}
