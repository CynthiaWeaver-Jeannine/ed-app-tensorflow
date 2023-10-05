/** @format */

import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<main className="flex min-h-screen items-center justify-center">
				<div className="flex flex-col gap-2 p-8 max-w-xs w-full bg-slate-800">
					<header>
						<h1 className="text-4xl font-bold text-center my-4">EverLearn</h1>
						<h2 className="text-lg italic">learning is a lifelong journey</h2>
					</header>
					<div>
						<Link
							href="/sign-in"
							className="dark:bg-slate-900 bg-slate-400 my-4 p-3 rounded-lg block">
							Sign in
						</Link>
					</div>
					<div>
						<Link
							href="/sign-up"
							className="dark:bg-slate-900 bg-slate-400 my-4 p-3 rounded-lg block">
							Sign up
						</Link>
					</div>
				</div>
			</main>
		</>
	);
}
