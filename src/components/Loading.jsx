import { pl, pl__dot, pl__text } from "@/css/loader.module.css";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <>
      <div className="flex justify-center items-center">
        <div className={pl}>
          <div className={pl__dot}></div>
          <div className={pl__dot}></div>
          <div className={pl__dot}></div>
          <div className={pl__dot}></div>
          <div className={pl__dot}></div>
          <div className={pl__dot}></div>
          <div className={pl__dot}></div>
          <div className={pl__dot}></div>
          <div className={pl__dot}></div>
          <div className={pl__dot}></div>
          <div className={pl__dot}></div>
          <div className={pl__dot}></div>
          <div className={pl__text}>Loading…</div>
        </div>
      </div>
    </>
  );
}
