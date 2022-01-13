import { useState, useRef, FunctionComponent, ReactNode } from "react";
import styled from "styled-components";
import * as Icons from "@icons/index";
import { colors } from "@/lib/styled/colors";

type SliderProps = {
  children: ReactNode;
  data: [];
  numOfElements?: number;
  title: string;
};

export const Slider: FunctionComponent<SliderProps> = ({
  data,
  numOfElements = 4,
  title,
  children,
}) => {
  const [clickCount, setClickCount] = useState(0);
  const mainWrap = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollCards = (direction: string) => {
    const width = mainWrap.current?.clientWidth ?? 0;
    const diff = direction === "next" ? 1 : -1;
    const newValue = (clickCount + diff) % (data.length / numOfElements);
    let scrollTo = null;

    setClickCount(newValue);
    scrollTo = width * newValue;

    containerRef.current?.scrollTo({
      behavior: "smooth",
      left: scrollTo,
    });
  };

  return (
    <SliderContainer ref={mainWrap} className="slider">
      <div className="flex-between">
        <h1>{title}</h1>
        <div>
          <button aria-label="prev" onClick={() => scrollCards("prev")}>
            <Icons.ChevronLeft color={colors.textColor} size={20} />
          </button>
          <button aria-label="next" onClick={() => scrollCards("next")}>
            <Icons.ChevronRight color={colors.textColor} size={20} />
          </button>
        </div>
      </div>

      <SliderContent ref={containerRef}>{children}</SliderContent>
    </SliderContainer>
  );
};

const SliderContent = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  overflow-x: hidden;
`;

const SliderContainer = styled.div`
  max-width: 1150px;
  button {
    height: 45px;
    width: 45px;
    border-radius: 50%;
    outline: none;
    border: none;
    cursor: pointer;
    background: none;
    transition: background 0.3s ease-in-out;

    &:hover {
      background: ${colors.grey200};
    }
  }
`;
