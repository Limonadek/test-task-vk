import * as React from 'react';
import { updateStyle } from '../../utils/slotSheet';

interface Props {
  src: string;
  transform: (str: string) => string;
  index: number;
  locator: string;
  width: number;
  height: number;
}

export default (props: Props) => {
  const { src, transform, index, locator, width, height } = props;
  const selector = `.image${index}`;
  const obj: { [key: string]: React.CSSProperties } = {};
  
  React.useEffect(() => {
    const styles = (): { [key: string]: React.CSSProperties } => {
      obj[selector] = {
        'background': `url(${src})`,
        'width': `${width}px`,
        'height': `${height}px`
      };
      return obj;
    };

    const style = updateStyle(null, locator, styles());

    return () => {
      delete obj[selector];
      updateStyle(style, locator, obj);
    };
  }, [src, width, height, locator, selector]);

  return (
    <div className={transform(`image${index}`)}></div>
  );
};
