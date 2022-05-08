// import { Slide, Typography } from "@mui/material";
// import { Box } from "@mui/system";
// import { useEffect, useRef, useState } from "react";
// import { MessageText, PromotionsContainer } from "../../styles/promotions";
// import { Colors } from "../../styles/theme";

import { Slide } from "@mui/material";
import { Box } from "@mui/system";
import { useState, useEffect, useRef } from "react";
import { MessageText, PromotionsContainer } from "../../styles/promotions";

const messages = [
	"20% off on your first order!",
	"Summer sale starts now, visit any store.",
	"Please like and subscribe :)",
];

export default function Promotions() {
	const containerRef = useRef();
	const [messageIndex, setMessageIndex] = useState(0);
	const [show, setShow] = useState(true);

	// 0 % 3 = 0;
	// 1 % 3 = 1;
	// 2 % 3 = 2;
	// 3 % 3 = 0;
	// 4 % 3 = 1;

	useEffect(() => {
		const intervalId = setInterval(() => {
			// get next message
			setMessageIndex((i) => (i + 1) % messages.length);

			// slide the message in
			setShow(true);

			setTimeout(() => {
				setShow(false);
			}, 3000);
		}, 4000);

		return () => {
			clearInterval(intervalId);
		};
	}, []);

	// "timeout" lo q tarda en entrar y salir

	// en el PromotionContainer
	// yellow yellow "overflow: "hidden"," para q no se ponga una scrollbar al entrar y salir el mensaje en el slider yellow yellow
	return (
		<PromotionsContainer ref={containerRef} overflow="hidden">
			<Slide
				direction={show ? "left" : "right"}
				in={show}
				container={containerRef.current}
				timeout={{
					enter: 500,
					exit: 100,
				}}
			>
				<Box display="flex" justifyContent="center" alignItems="center">
					<MessageText>{messages[messageIndex]}</MessageText>
				</Box>
			</Slide>
		</PromotionsContainer>
	);
}

/*
export default function Promotions() {
	

	return (
		<PromotionsContainer ref={containerRef} overflow="hidden">
			<Slide
				direction={show ? "left" : "right"}
				in={show}
				container={containerRef.current}
				timeout={{
					enter: 500,
					exit: 100,
				}}
			>
				<Box display="flex" justifyContent="center" alignItems="center">
					<MessageText>{messages[messageIndex]}</MessageText>
				</Box>
			</Slide>
		</PromotionsContainer>
	);
}
*/
