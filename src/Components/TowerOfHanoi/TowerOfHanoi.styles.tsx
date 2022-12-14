import styled from '@emotion/styled';
import { TextInput, Select, NumberInput } from '@mantine/core';

export const StyledTextInput = styled(TextInput)`
	margin-top: 20px;
	.mantine-TextInput-label {
		font-weight: bold;
	}
`;

export const StyledNumberInput = styled(NumberInput)`
	margin-top: 20px;
	.mantine-NumberInput-label {
		font-size: 20px;
		margin-bottom: 5px;
		font-weight: bold;
	}
	.mantine-NumberInput-input {
		height: 50px;
		font-size: 30px;
		font-weight: bold;
	}
	.mantine-NumberInput-wrapper {
	}
`;

export const StyledSelect = styled(Select)`
	margin-top: 20px;
	.mantine-Select-label {
		font-weight: bold;
	}
`;
