import classNames from 'classnames';
import { MouseEvent, useEffect, useState } from 'react';

interface NavigationProps {
  navigationType?: string | number;
  onAfterChangeEvent?: (...args: any) => void;
}

function Navigation({ navigationType, onAfterChangeEvent }: NavigationProps) {
  const [navButtons, setNavButtons] = useState([
    { id: '1', text: '차량 프로모션', isActive: true },
    { id: '2', text: '기타 프로모션', isActive: false },
  ]);

  const onChangePromotionType = (event: MouseEvent<HTMLButtonElement>) => {
    const type = event.currentTarget.dataset.type as string;
    setNavButtons((prev) => {
      const newBtns = prev.map((btn) => ({
        ...btn,
        isActive: btn.id === type,
      }));
      return newBtns;
    });
    if (onAfterChangeEvent) onAfterChangeEvent(type);
  };

  useEffect(() => {
    if (navigationType) {
      setNavButtons((prev) => {
        const newBtns = prev.map((btn) => ({
          ...btn,
          isActive: btn.id === navigationType,
        }));
        return newBtns;
      });
    }
  }, [navigationType]);

  return (
    <nav className="promotion__navigation">
      <div className="promotion__navigation-wrapper">
        {navButtons.map(({ id, text, isActive }) => (
          <button
            key={id}
            data-type={id}
            className={classNames(
              isActive ? 'active' : 'inactive',
              id !== '1' ? 'border-left' : '',
            )}
            onClick={onChangePromotionType}
          >
            {text}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default Navigation;
