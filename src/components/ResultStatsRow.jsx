import React, { PropTypes } from 'react';
import { Row, Col } from 'react-bootstrap';
import InformationLabel from './InformationLabel';
import languageColors from '../utils/languageColors';
import '../styles/result-stats-row.css';

const ResultStatsRow = (props) => {
  const data = props.data;

  return (
    <Row className='quick-info-row'>
      <Col xs={12}>
<<<<<<< HEAD
        <InformationLabel data={data.forks_count} level="success">{ "Forks: " }</InformationLabel>
        <InformationLabel data={data.stargazers_count} level="warning">{ "Stars: " }</InformationLabel>
        <InformationLabel data={data.watchers_count} level="info">{ "Watchers: " }</InformationLabel>
        <InformationLabel data={data.open_issues_count} color="#C370E8">{ "Open Issues and Pull Requests: " }</InformationLabel>
=======
        <InformationLabel data={data.forksCount} level="success">{ "Forks: " }</InformationLabel>
        <InformationLabel data={data.stargazersCount} level="warning">{ "Stars: " }</InformationLabel>
        <InformationLabel data={data.watchersCount} level="info">{ "Watchers: " }</InformationLabel>
        <InformationLabel data={data.open_issuesCount} color="#C370E8">{ "Issues: " }</InformationLabel>
>>>>>>> Starting addition of models
        <InformationLabel data={data.language} color={languageColors[data.language]} />
      </Col>
    </Row>
  );
}

ResultStatsRow.propTypes = {
  data: PropTypes.object.isRequired
};

export default ResultStatsRow;
