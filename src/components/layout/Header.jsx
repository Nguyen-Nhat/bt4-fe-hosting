import {
    Navbar,
    Typography,
} from "@material-tailwind/react";
import {Link} from "react-router-dom";
import { ProfileMenu } from "../ProfileMenu";
export const Header = () => {
    return (
        <Navbar className="sticky top-0 z-10 bg-[#263238] bg-opacity-100 h-max max-w-full rounded-none border-none px-8 py-3">
            <div className="flex items-center justify-between text-blue-gray-900">
                <Link to="/">
                    <Typography
						as="h5"
						className="mx-2 cursor-pointer text-2xl py-1.5 font-bold text-white tracking-wider grow"
                    >
                      	HOME
                    </Typography>
                </Link>
                <div className="flex items-center justify-between flex-nowrap">
					<div className="mx-2">
						<ProfileMenu/>
					</div>
                </div>
            </div>
        </Navbar>
    );
};