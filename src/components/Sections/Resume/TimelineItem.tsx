import {FC, memo} from 'react';

import {TimelineItem} from '../../../data/dataDef';

const TimelineItem: FC<{item: TimelineItem}> = memo(({item}) => {
  const {title, date, location, content} = item;
  return (
    <div className="text-white flex flex-col text-center pb-8 pt-8 first:pb-8 first:pt-0 last:pb-0 last:pt-8 md:text-left border-b last:border-0">
      <div className="flex flex-col pb-8">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="text-gray-300 flex items-center justify-center gap-x-2 md:justify-start">
          <span className="flex-1 text-sm font-medium italic sm:flex-none">{location}</span>
          <span>•</span>
          <span className="flex-1 text-sm sm:flex-none">{date}</span>
        </div>
      </div>
      {content ? content : ''}
    </div>
  );
});

TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;
