//src/pages/MainPage.tsx
import UserMenu from "../features/user/components/UserMenu";
import { MovieSlider } from "../features/movie/components/MovieSlider";

export default function MainPage() {
  return (
    <div className="flex flex-col w-full bg-black">
          <div className="h-1/10 fixed top-0 right-0 left-0 w-full z-1000 ">
            <UserMenu />
          </div>
          <div className="mb-30">
          </div>
            <MovieSlider
              title="Teraz grane"
              type="now-playing"
            />

            <MovieSlider
              title="Familijne"
              category="family"
            />
            <MovieSlider
              title="Popularne"
              category="trending"
            />
    </div>
        );
}