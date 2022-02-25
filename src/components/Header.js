import { useEffect, useState } from "react";
import Logo from "./Logo";

export default function Header() {
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setIsVisible(false)
		}, 4000);
	}, [])

	return (
		<div>
			{isVisible && <Logo />}
		</div>
	)
}