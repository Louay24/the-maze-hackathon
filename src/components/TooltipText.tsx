import React from 'react';
import { Tooltip } from 'antd';

interface TooltipTextProps {
  text?: string;
  maxWidth?: number;
}
export const TooltipText = ({ text, maxWidth }: TooltipTextProps) => {
  const [isOverflowing, setIsOverflowing] = React.useState(false);
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (ref.current) {
      setIsOverflowing(ref.current?.offsetWidth < ref.current?.scrollWidth);
    }
  }, [text, maxWidth]);

  return (
    <div
      ref={ref}
      style={{ maxWidth, overflow: 'hidden', textOverflow: 'ellipsis' }}
    >
      {isOverflowing ? (
        <Tooltip title={text}>
          <span style={{ whiteSpace: 'nowrap' }}>{text}</span>
        </Tooltip>
      ) : (
        <span style={{ whiteSpace: 'nowrap' }}>{text}</span>
      )}
    </div>
  );
};
