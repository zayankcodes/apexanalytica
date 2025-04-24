import {useEffect,useRef} from "react";

export default function Particles({count=80}){
  const host=useRef(null);

  useEffect(()=>{
    const h=host.current;
    const dots=[...Array(count)].map(()=>{
      const s=document.createElement("span");
      s.className="absolute h-1 w-1 rounded-full bg-accent opacity-30 animate-floatDot";
      s.style.left=Math.random()*100+"%";
      s.style.top =Math.random()*100+"%";
      s.style.animationDuration=10+Math.random()*20+"s";
      h.appendChild(s);
      return s;
    });
    return()=>dots.forEach(d=>d.remove());
  },[count]);

  return <div ref={host} className="fixed inset-0 -z-25 pointer-events-none"/>;
}
