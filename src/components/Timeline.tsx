import './Timeline.css';

interface Props {
  date: string;
}

const Timeline = ({ date }: Props) => {
  return (
    <div className='timeline'>
      <div className='created-at'>
        {date.split(' ')[0]}
        <br />
        {date.split(' ')[1]}
      </div>
    </div>
  );
};

export default Timeline;
