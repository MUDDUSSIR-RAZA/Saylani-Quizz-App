import { pl, pl__dot, pl__text } from "@/css/loader.module.css";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <>
      <div className="w-dvw h-dvh flex justify-center items-center backdrop-blur-2xl bg-[#ffffff00] rounded-lg shadow-2xl">
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
