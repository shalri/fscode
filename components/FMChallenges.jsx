import { fmChallenges } from "@utils/fmData";
import elink from "../public/external-link.svg";

export const FMChallenges = () => {
  return (
    <aside className="font-jbmono">
      <h2 className="mb-2 opacity-70">
        <span className="opacity-25">./</span>Frontend Mentor Challenges
        <span className="opacity-25">/</span>
      </h2>
      <ul className="text-sm">
        {fmChallenges.map((challenge, index) => (
          // {/* <li key={index} className="mb-1 bg-[url(/external-link.svg)]"> */}
          <li
            key={index}
            className="mb-1 flex items-center bg-contain bg-left bg-no-repeat pl-8 "
            style={{
              backgroundImage: `url(${elink.src})`,
            }}
          >
            <a
              href={challenge.url}
              target="_blank"
              className="transition-color duration-200 hover:text-yellow-fs"
            >
              {challenge.title}{" "}
              <span className="text-xs opacity-70">[{challenge.level}]</span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};
