// src/components/NewArticleModal.tsx
import React from "react";

interface NewArticleModalProps {
  title: string;
  url: string;
}

const NewArticleModal: React.FC<NewArticleModalProps> = ({ title, url }) => {
  return (
    <article
      id="modal"
      className="absolute bottom-5 right-5 z-40 hidden w-[300px] animate-bounce space-y-1 bg-foreground p-3 text-background opacity-0 hover:[animation-play-state:paused] md:block"
      role="dialog"
      aria-labelledby="new-article-title"
      aria-hidden="true"
    >
      <h5 id="new-article-title" className="font-prata text-xl uppercase">
        New Article
      </h5>
      <a
        className="block text-sm transition duration-200 ease-out hover:underline"
        href={url}
        aria-label={`Read more about ${title}`}
      >
        {title}
      </a>
    </article>
  );
};

export default NewArticleModal;
