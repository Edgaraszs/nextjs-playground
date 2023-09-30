interface Props {
  visible: boolean;
  clicked(): void
};

export default function Dropdown({ visible = false, clicked }: Props) {
  return (
    <>
      {
        visible && (
          <div onClick={clicked} className="z-40 min-h-screen w-screen absolute top-0 left-0"/>
        )
      }
    </>
  );
}