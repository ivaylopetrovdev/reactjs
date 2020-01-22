import React from 'react';
import convertToGermanFormat from "../utils/GermanFormat";
import calculateBudgetLeft from "../utils/BudgetLeft";
import DetailsBox from "../components/DetailsBox";

const CompanyDetails = ({ companyData }) => (
	<>
		<DetailsBox title="Company Name">
			{companyData.name}
		</DetailsBox>
		<DetailsBox title="Date of a first purchase">
			{companyData.date_of_first_purchase}
		</DetailsBox>
		<DetailsBox title="Total budget">
			{convertToGermanFormat(companyData.budget).stringValue}
		</DetailsBox>
		<DetailsBox title="Budget spent">
			{convertToGermanFormat(companyData.budget_spent).stringValue}
		</DetailsBox>
		<DetailsBox title="Budget left">
			{convertToGermanFormat(calculateBudgetLeft(companyData)).stringValue}
		</DetailsBox>
	</>
);

export default CompanyDetails;