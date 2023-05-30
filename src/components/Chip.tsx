import './Chip.css';

interface Props {
  text: string;
}

const Chip = ({ text }: Props) => {
  return <div className='chip'>{text}</div>;
};

export default Chip;
