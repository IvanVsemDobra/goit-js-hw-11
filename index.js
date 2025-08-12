import{a as d,S as p,i as s}from"./assets/vendor-Dlc6jZjm.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const f="51715222-245823a157b91ecf18a5e059a",m="https://pixabay.com/api/";async function y(i,r=1,o=40){try{const a={key:f,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:o};return(await d.get(m,{params:a})).data}catch(a){throw console.error("Помилка при завантаженні зображень:",a),a}}let g=new p(".gallery a",{captionsData:"alt",captionDelay:250});const c=document.querySelector(".gallery");function h(i){const r=i.map(({webformatURL:o,largeImageURL:a,tags:e,likes:t,views:n,comments:l,downloads:u})=>`
        <li class="gallery-item">
          <a href="${a}">
            <img src="${o}" alt="${e}" loading="lazy" />
          </a>
          <div class="info">
            <p><b>Likes:</b> ${t}</p>
            <p><b>Views:</b> ${n}</p>
            <p><b>Comments:</b> ${l}</p>
            <p><b>Downloads:</b> ${u}</p>
          </div>
        </li>
      `).join("");c.insertAdjacentHTML("beforeend",r),g.refresh()}function b(){c.innerHTML=""}function L(){document.querySelector(".loader")?.classList.remove("hidden")}function w(){document.querySelector(".loader")?.classList.add("hidden")}const S=document.querySelector(".form");S.addEventListener("submit",async i=>{i.preventDefault();const r=i.target.elements["search-text"].value.trim();if(!r){s.warning({title:"Warning",message:"Please enter a search term!",position:"topRight"});return}b(),L();try{const o=await y(r,1,40);if(!o.hits||!o.hits.length){s.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(o.hits)}catch{s.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{w()}});
//# sourceMappingURL=index.js.map
