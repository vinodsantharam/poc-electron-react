const Person = `
<ns3:Person>
    <ns3:Particulars>
        <ns3:Social-InsuranceIdentification>
            <ns3:SV-AS-Number>756.3426.3448.04</ns3:SV-AS-Number>
        </ns3:Social-InsuranceIdentification>
        <ns3:EmployeeNumber>0100</ns3:EmployeeNumber>
        <ns3:Lastname>Balmer</ns3:Lastname>
        <ns3:Firstname>Fredi</ns3:Firstname>
        <ns3:Sex>M</ns3:Sex>
        <ns3:DateOfBirth>1945-03-16</ns3:DateOfBirth>
        <ns3:Nationality>CH</ns3:Nationality>
        <ns3:CivilStatus>
            <ns3:Status>married</ns3:Status>
        </ns3:CivilStatus>
        <ns3:Address>
            <ns3:Street>Länggassstrasse 26</ns3:Street>
            <ns3:Postbox>690</ns3:Postbox>
            <ns3:Locality>Länggassquartier</ns3:Locality>
            <ns3:ZIP-Code>3000</ns3:ZIP-Code>
            <ns3:City>Bern 9</ns3:City>
            <ns3:Country>CH</ns3:Country>
        </ns3:Address>
        <ns3:ResidenceCanton>ZG</ns3:ResidenceCanton>
    </ns3:Particulars>
    <ns3:Work>
        <ns3:ActivityRate>99</ns3:ActivityRate>
        <ns3:EntryDate>2007-05-01</ns3:EntryDate>
    </ns3:Work>
    <ns3:UVGZ-LAAC-Salaries>
        <ns3:UVGZ-LAAC-Salary institutionIDRef="#Backwork">
            <ns3:AccountingTime>
                <ns3:from>2016-10-01</ns3:from>
                <ns3:until>2016-12-31</ns3:until>
            </ns3:AccountingTime>
            <ns3:UVGZ-LAAC-Code>11</ns3:UVGZ-LAAC-Code>
            <ns3:UVGZ-LAAC-BaseSalary>65000.00</ns3:UVGZ-LAAC-BaseSalary>
            <ns3:UVGZ-LAAC-ContributorySalary>65000.00</ns3:UVGZ-LAAC-ContributorySalary>
        </ns3:UVGZ-LAAC-Salary>
    </ns3:UVGZ-LAAC-Salaries>
</ns3:Person>
`;

export default Person;