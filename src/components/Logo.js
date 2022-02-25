import { AnimatePresence, motion } from "framer-motion";

const svgVariants = {
	initial: {
		rotate: -360
	},
	animate: {
		rotate: 0,
		transition: {
			duration: 1
		}
	},
	exit: {
		rotate: -180
	}
}

const pathVariants = {
	initial: {
		opacity: 0,
		pathLength: 0
	},
	animate: {
		opacity: 1,
		pathLength: 1,
		transition: {
			duration: 2,
			ease: 'easeInOut'
		}
	}
}



export default function Logo() {
	return (
		<AnimatePresence>
			<motion.div className="fixed top-0 left-0 w-full h-full bg-slate-300 flex justify-center items-center">
				<motion.svg xmlns="http://www.w3.org/2000/svg" width="250" height="250" viewBox="0 0 192.755 192.756"
					className="rounded-3xl"
					variants={svgVariants}
					initial="initial"
					animate="animate"
					exit="exit"
				>
					<motion.g fill-rule="evenodd" clip-rule="evenodd"><path fill="#fff" d="M0 0h192.755v192.756H0V0z"
						variants={pathVariants}
					/>
						<motion.path d="M127.986 70.51v7.505l-63.217 28.846v-7.743l54.357-24.873L64.769 49.4v-7.744l63.217 28.854zM64.769 122.25v-7.495l63.217-28.852v7.74L73.654 118.5l54.332 24.859v7.741l-63.217-28.85z"
							variants={pathVariants}
						/>
					</motion.g>
				</motion.svg>
			</motion.div>
		</AnimatePresence>
	)
}