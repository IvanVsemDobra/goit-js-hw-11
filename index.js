import{a as u,S as m,i as s}from"./assets/vendor-Dlc6jZjm.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const p="51715222-245823a157b91ecf18a5e059a",f="https://pixabay.com/api/";async function g(a){const r={key:p,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await u.get(f,{params:r})).data}let y=new m(".gallery a",{captionsData:"alt",captionDelay:250});const c=document.querySelector(".gallery");function h(a){const r=a.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:i,comments:l,downloads:d})=>`
        <li class="gallery-item">
          <a href="${n}">
            <img src="${o}" alt="${e}" loading="lazy" />
          </a>
          <div class="info">
            <p><b>Likes:</b> ${t}</p>
            <p><b>Views:</b> ${i}</p>
            <p><b>Comments:</b> ${l}</p>
            <p><b>Downloads:</b> ${d}</p>
          </div>
        </li>
      `).join("");c.insertAdjacentHTML("beforeend",r),y.refresh()}function b(){c.innerHTML=""}function L(){document.getElementById("loader").classList.remove("hidden")}function w(){document.getElementById("loader").classList.add("hidden")}const v=document.querySelector(".form");v.addEventListener("submit",async a=>{a.preventDefault();const r=a.target.elements["search-text"].value.trim();if(!r){s.warning({title:"Warning",message:"Please enter a search term!",position:"topRight"});return}b(),L();try{const o=await g(r);if(!o.hits.length){s.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(o.hits)}catch{s.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{w()}});
//# sourceMappingURL=index.js.map
