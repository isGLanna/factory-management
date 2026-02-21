import { Tooltip } from "radix-ui";

export default () => (
	<Tooltip.Provider>
		<Tooltip.Root>
			<Tooltip.Trigger />
			<Tooltip.Portal>
				<Tooltip.Content>
					<Tooltip.Arrow />
				</Tooltip.Content>
			</Tooltip.Portal>
		</Tooltip.Root>
	</Tooltip.Provider>
);
