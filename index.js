import{a as d,S as f,i as p}from"./assets/vendor-Dlc6jZjm.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const m="51715222-245823a157b91ecf18a5e059a",y="https://pixabay.com/api/";async function h(i,r=1,o=40){try{const{data:a}=await d.get(y,{params:{key:m,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:o}});return{hits:a.hits,totalHits:a.totalHits}}catch(a){throw console.error("Помилка при завантаженні зображень:",a),a}}let g=new f(".gallery a",{captionsData:"alt",captionDelay:250});const c=document.querySelector(".gallery");function b(i){const r=i.map(({webformatURL:o,largeImageURL:a,tags:e,likes:t,views:n,comments:l,downloads:u})=>`
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
      `).join("");c.insertAdjacentHTML("beforeend",r),g.refresh()}function L(){c.innerHTML=""}function w(){document.querySelector(".loader")?.classList.remove("hidden")}function S(){document.querySelector(".loader")?.classList.add("hidden")}const q=document.querySelector(".form");function s(i,r,o){p[i]({title:r,message:o,position:"topRight"})}q.addEventListener("submit",async i=>{i.preventDefault();const r=i.target.elements["search-text"].value.trim();if(!r)return s("warning","Warning","Please enter a search term!");L(),w();try{const{hits:o}=await h(r,1,40);if(!o.length)return s("error","Error","Sorry, there are no images matching your search query. Please try again!");b(o)}catch{s("error","Error","Something went wrong. Please try again later.")}finally{S()}});
//# sourceMappingURL=index.js.map
