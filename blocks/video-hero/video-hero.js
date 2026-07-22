const MOTION_QUERY = '(prefers-reduced-motion: reduce)';
const VIDEO_PATTERN = /\.(mp4|webm|ogg)(\?|#|$)/i;

function createVideo(src, poster) {
  const video = document.createElement('video');
  video.muted = true;
  video.defaultMuted = true;
  video.loop = true;
  video.playsInline = true;
  video.preload = 'none';
  video.setAttribute('muted', '');
  video.setAttribute('loop', '');
  video.setAttribute('playsinline', '');
  video.setAttribute('aria-hidden', 'true');
  if (poster) video.poster = poster;

  const source = document.createElement('source');
  source.dataset.src = src;
  source.type = src.toLowerCase().includes('.webm') ? 'video/webm' : 'video/mp4';
  video.append(source);
  return video;
}

function scheduleVideo(video, block) {
  const reduceMotion = window.matchMedia(MOTION_QUERY);
  if (reduceMotion.matches) return;

  const load = () => {
    const source = video.querySelector('source[data-src]');
    if (!source || source.src) return;
    source.src = source.dataset.src;
    video.load();
    video.play().catch(() => {});
  };

  video.addEventListener('canplay', () => block.classList.add('video-ready'), { once: true });
  if (document.readyState === 'complete') window.setTimeout(load, 250);
  else window.addEventListener('load', () => window.setTimeout(load, 250), { once: true });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) video.pause();
    else if (!reduceMotion.matches) video.play().catch(() => {});
  });
}

export default function decorate(block) {
  let videoUrl;
  let poster;
  const content = document.createElement('div');
  content.className = 'video-hero-content';

  [...block.children].forEach((row) => {
    const videoLink = [...row.querySelectorAll('a[href]')]
      .find((link) => VIDEO_PATTERN.test(link.href));
    if (videoLink) {
      videoUrl = videoLink.href;
      row.remove();
      return;
    }

    const picture = row.querySelector('picture');
    if (picture && !poster) {
      poster = picture;
      row.remove();
      return;
    }

    [...row.children].forEach((cell) => {
      while (cell.firstChild) content.append(cell.firstChild);
    });
    row.remove();
  });

  const media = document.createElement('div');
  media.className = 'video-hero-media';
  if (poster) {
    const posterWrap = document.createElement('div');
    posterWrap.className = 'video-hero-poster';
    posterWrap.append(poster);
    media.append(posterWrap);
    block.classList.add('has-poster');
  }

  if (videoUrl) {
    const posterImage = poster?.querySelector('img');
    const video = createVideo(videoUrl, posterImage?.currentSrc || posterImage?.src);
    media.append(video);
    block.classList.add('has-video');
    scheduleVideo(video, block);
  }

  block.replaceChildren(media, content);
}
