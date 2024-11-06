import { memo } from "react";
import { Button, Card, CardBody, Typography } from "@material-tailwind/react";

export const Home = memo(() => {
	return (
		<main className="flex-grow flex items-center justify-center min-h-screen">
			<div className="container mx-auto px-4 py-10">
				<Card className="max-w-lg mx-auto shadow-lg">
					<CardBody className="text-center">
						<Typography variant="h4" color="blue-gray" className="mb-4 font-bold">
							Welcome to Our Website!
						</Typography>
						<Typography variant="paragraph" color="gray" className="mb-6">
							This is a simple homepage built with @material-tailwind/react. Explore and enjoy the features we have to offer!
						</Typography>
						<Button variant="filled" color="blue" size="lg">
							Get Started
						</Button>
					</CardBody>
				</Card>
			</div>
		</main>
	);
});
