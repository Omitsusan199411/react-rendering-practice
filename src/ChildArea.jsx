// memoはpropsが変更しない限り、再レンダリングしない指定（再レンダリングの最適化）
// 基本的には、memoでコンポーネントを囲いmemo化することでコンポーネントの再レンダリング化を防ぐ。
import {memo} from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "kihaki"
};

export const ChildArea = memo((props) => {
  const { open, onClickClose } = props;
  console.log("childAreaがレンダリングされた!!!");

  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log("...");
  });

  return (
    <>
      {/* 三項演算子 */}
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
