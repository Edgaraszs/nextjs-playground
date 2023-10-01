import { useFloating, autoUpdate, size } from '@floating-ui/react';
import Backdrop from '@/components/backdrop/backdrop';

interface Props {
  anchor?: HTMLElement | null;
  visible: boolean;
  items: Array<any> | null;
  toggleVisibility(): void;
  selected(value: string): void;
};

export default function Dropdown({ 
  anchor, 
  visible = false, 
  items = [], 
  toggleVisibility,
  selected
}: Props) {
  const {refs, floatingStyles} = useFloating({
    whileElementsMounted: autoUpdate,
    placement: "bottom-start",
    elements: {
      reference: anchor,
    },
    middleware: [
      size({
        apply({ rects, elements }) {
          Object.assign(elements.floating.style, {
            width: `${rects.reference.width}px`
          });
        }
      }),
    ]
  });

  return (
    <>
      <div className="z-50" ref={refs.setFloating} style={floatingStyles}>
        { visible 
          ? <div className="bg-gray-700 max-h-80 overflow-auto">
            {
              items?.map((item, index) => {
                return (
                  <div 
                    className="cursor-pointer hover:bg-cyan-600" 
                    onClick={() => selected(item.name.common)} 
                    key={index}
                  >
                    <div className="py-2 px-3">
                      {item.name.common}
                    </div>
                  </div>
                )
              })
            }
          </div> 
          : null 
        }
      </div>
      <Backdrop visible={visible} clicked={toggleVisibility}/>
    </>
  );
}