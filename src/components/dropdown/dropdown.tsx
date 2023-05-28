import { useFloating } from '@floating-ui/react';

interface Props {
  anchor?: HTMLElement | null;
  visible: boolean;
};

export default function Dropdown({ anchor, visible = false }: Props) {
  const {refs, floatingStyles} = useFloating({
    placement: "bottom-start",
    elements: {
      reference: anchor,
    },
  });
 
  return (
    <div ref={refs.setFloating} style={floatingStyles}>
      { visible 
        ? <div>Tooltip</div> 
        : null 
      }
    </div>
  );
}