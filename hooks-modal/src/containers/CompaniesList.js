import React, {useState, useEffect} from 'react';

import CompanyDetails from '../components/CompanyDetails';
import Modal from "../components/Modal";
import data from '../utils/DataUtil';

const CompaniesList = () => {
	const [companies, setCompanies] = useState([]);
	const [showModal, setShowModal] = useState({show: false, selected: null});
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			fetch(
				'https://api.billie.io/resources/companies',
				{
					method: "GET",
					mode: "no-cors"
				}
			)
				.then(res => res.json())
				.then(response => {
					setCompanies(response.data);
					setIsLoading(false);
				})
				.catch(error => {
					// mock data
					setCompanies(data.data);
					setIsLoading(false);
				});
		}, 1000);

		return () => clearTimeout(timer);
	}, []);

	const toggleModal = (e, selectedIndex) => {
		setShowModal({show: !showModal.show, selected: selectedIndex});
	};

	const submitModal = (updatedCompany) => {
		setCompanies(companies.map((c) => (c.id === updatedCompany.id) ? updatedCompany : c));
	};

	return (
		<>
			{isLoading && <p>Please wait... fetching data for you</p>}

			{companies.map((c, index) => (
				<div className="details-wrapper" key={index} onClick={e => toggleModal(e, index)}>
					<CompanyDetails companyData={c} />
				</div>
			))}

			{showModal.show && companies[showModal.selected] ? (
				<Modal
					onClose={toggleModal}
					show={showModal.show}
					company={companies[showModal.selected]}
					onSubmit={submitModal}
				/>
			): null }
		</>
	)
};

export default CompaniesList;