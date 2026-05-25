// src/pages/LoginPage.tsx
import LoginForm from "../features/auth/components/LoginForm";
import UserMenu from "../features/user/components/UserMenu";
import UserFooter from "../features/user/components/UserFooter";
export default function LoginPage() {
  return  (
      <div className="flex flex-col w-full bg-black h-screen overflow-hidden">
            <div className="h-1/10 fixed top-0 right-0 left-0 w-full z-1000 ">
              <UserMenu />
            </div>
  
              <LoginForm/>;
                    <UserFooter />
      </div>
          );
}