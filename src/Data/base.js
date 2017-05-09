const BaseData = `
<?xml version="1.0" encoding="UTF-8"?>
<ns4:DeclareSalaryConsumer
        xmlns:ns2="http://www.swissdec.ch/schema/sd/20130514/SalaryDeclarationContainer"
        xmlns:ns3="http://www.swissdec.ch/schema/sd/20130514/SalaryDeclaration"
        xmlns:ns4="http://www.swissdec.ch/schema/sd/20130514/SalaryDeclarationConsumerServiceTypes"
        xmlns="http://www.swissdec.ch/schema/sd/20130514/SalaryDeclarationConsumerContainer">
    <DistributorRequestContext>
        <UserAgent>
            <Producer>itServe AG</Producer>
            <Name>receiver certification testsuite</Name>
            <Version>1.5.0</Version>
        </UserAgent>
        <TransmissionDate>2016-11-07T11:41:05.173+01:00</TransmissionDate>
        <DeclarationID>1234556</DeclarationID>
        <DistributorRequestID>8304838c-7d11-4d46-ac54-c16b8ad581f4</DistributorRequestID>
        <TestCase/>
        <ProducerSecurityTokens>
            <Timestamp>2016-01-10T13:37:47.0Z</Timestamp>
            <X509Certificate>
                <Usage>Signature</Usage>
                <DistinguishedNameOwner>SERIALNUMBER=3, CN=Test, O=Swissdec, C=CH</DistinguishedNameOwner>
                <DistinguishedNameIssuer>CN=Swissdec, C=CH</DistinguishedNameIssuer>
                <SecuredElement>{http://schemas.xmlsoap.org/soap/envelope/}Body</SecuredElement>
            </X509Certificate>
        </ProducerSecurityTokens>
        <ProducerResponseNotifications/>
        <Institutions>
            <ns3:UVGZ-LAAC institutionID="#Backwork">
                <ns3:InsuranceID>S122</ns3:InsuranceID>
                <ns3:InsuranceCompanyName>SWICA</ns3:InsuranceCompanyName>
                <ns3:CustomerIdentity>6460746</ns3:CustomerIdentity>
                <ns3:ContractIdentity>12598158</ns3:ContractIdentity>
            </ns3:UVGZ-LAAC>
        </Institutions>
    </DistributorRequestContext>
    <DeclareSalary>
        <ns2:RequestContext>
            <ns2:UserAgent>
                <ns2:Producer>itServe AG</ns2:Producer>
                <ns2:Name>Test</ns2:Name>
                <ns2:Version>0.1</ns2:Version>
                <ns2:Certificate>None</ns2:Certificate>
                <ns2:ELM-SalaryStandardVersion>3.0</ns2:ELM-SalaryStandardVersion>
            </ns2:UserAgent>
            <ns2:CompanyName>
                <ns3:HR-RC-Name>String</ns3:HR-RC-Name>
            </ns2:CompanyName>
            <ns2:TransmissionDate>2016-11-07T11:41:05.173+01:00</ns2:TransmissionDate>
            <ns2:RequestID>reqId</ns2:RequestID>
            <ns2:LanguageCode>de</ns2:LanguageCode>
            <ns2:TestCase/>
            <ns2:MonitoringID>tester</ns2:MonitoringID>
        </ns2:RequestContext>
        <ns2:Job>
            <ns2:Addressees>
                <ns2:UVGZ-LAAC institutionIDRef="#Backwork">
                    <ns2:ProcessByDistributor>true</ns2:ProcessByDistributor>
                </ns2:UVGZ-LAAC>
            </ns2:Addressees>
        </ns2:Job>
        <ns2:SalaryDeclaration schemaVersion="0.0">
            <ns3:Company>
                <ns3:CompanyDescription>
                    <ns3:Name>
                        <ns3:HR-RC-Name>Authentische Küche GMBH</ns3:HR-RC-Name>
                    </ns3:Name>
                    <ns3:Address>
                        <ns3:Street>Schönhausstrasse 1</ns3:Street>
                        <ns3:Postbox></ns3:Postbox>
                        <ns3:ZIP-Code>8335</ns3:ZIP-Code>
                        <ns3:City>Hittnau</ns3:City>
                    </ns3:Address>
                    <ns3:UID-EHRA>CH-645.1.234.567-3</ns3:UID-EHRA>
                    <!--                    <ns3:BUR-REE-Number>12345678</ns3:BUR-REE-Number>-->
                    <ns3:Workplace workplaceID="#DistributorGenerated-1">
                        <ns3:AddressExtended>
                            <ns3:ZIP-Code>3012</ns3:ZIP-Code>
                            <ns3:City>Bern</ns3:City>
                        </ns3:AddressExtended>
                        <ns3:CompanyWorkingTime>
                            <ns3:WeeklyHours>42.00</ns3:WeeklyHours>
                        </ns3:CompanyWorkingTime>
                    </ns3:Workplace>
                </ns3:CompanyDescription>
                <ns3:Staff>
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
                    <ns3:Person>
                        <ns3:Particulars>
                            <ns3:Social-InsuranceIdentification>
                                <ns3:SV-AS-Number>756.3426.3448.04</ns3:SV-AS-Number>
                            </ns3:Social-InsuranceIdentification>
                            <ns3:EmployeeNumber>0101</ns3:EmployeeNumber>
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
                                <ns3:UVGZ-LAAC-BaseSalary>70000.00</ns3:UVGZ-LAAC-BaseSalary>
                                <ns3:UVGZ-LAAC-ContributorySalary>70000.00</ns3:UVGZ-LAAC-ContributorySalary>
                            </ns3:UVGZ-LAAC-Salary>
                        </ns3:UVGZ-LAAC-Salaries>
                    </ns3:Person>
                </ns3:Staff>
                <ns3:Institutions>
                    <ns3:UVGZ-LAAC institutionID="#Backwork">
                        <ns3:InsuranceID>S122</ns3:InsuranceID>
                        <ns3:InsuranceCompanyName>SWICA</ns3:InsuranceCompanyName>
                        <ns3:CustomerIdentity>6460746</ns3:CustomerIdentity>
                        <ns3:ContractIdentity>12598158</ns3:ContractIdentity>
                    </ns3:UVGZ-LAAC>
                </ns3:Institutions>
                <ns3:SalaryTotals>
                    <ns3:UVGZ-LAAC-Totals institutionIDRef="#Backwork">
                        <ns3:UVGZ-LAAC-CategoryTotals>
                            <ns3:UVGZ-LAAC-CategoryTotal>
                                <ns3:CategoryCode>11</ns3:CategoryCode>
                                <ns3:Female-Total>0.00</ns3:Female-Total>
                                <ns3:Male-Total>135000.00</ns3:Male-Total>
                            </ns3:UVGZ-LAAC-CategoryTotal>
                        </ns3:UVGZ-LAAC-CategoryTotals>
                        <ns3:UVGZ-LAAC-MasterTotal>135000.00</ns3:UVGZ-LAAC-MasterTotal>
                    </ns3:UVGZ-LAAC-Totals>
                </ns3:SalaryTotals>
                <ns3:SalaryCounters>
                    <ns3:NumberOf-UVGZ-LAAC-Salary-Tags>2</ns3:NumberOf-UVGZ-LAAC-Salary-Tags>
                </ns3:SalaryCounters>
            </ns3:Company>
            <ns3:GeneralSalaryDeclarationDescription>
                <ns3:CreationDate>2016-09-04T14:14:00</ns3:CreationDate>
                <ns3:AccountingPeriod>2016</ns3:AccountingPeriod>
                <ns3:ContactPerson>
                    <ns3:Name>Marcel René Müller</ns3:Name>
                    <ns3:EmailAddress>ichag@xxxxx.ch</ns3:EmailAddress>
                    <ns3:PhoneNumber>031 345 23 87</ns3:PhoneNumber>
                </ns3:ContactPerson>
                <ns3:Comment>
                    <ns3:Notification>
                        <ns3:QualityLevel>Comment</ns3:QualityLevel>
                        <ns3:DescriptionCode>123</ns3:DescriptionCode>
                        <ns3:Description>Bitte senden Sie eine Suva-Apotheke an hôtel-garçon in genève</ns3:Description>
                    </ns3:Notification>
                </ns3:Comment>
            </ns3:GeneralSalaryDeclarationDescription>
        </ns2:SalaryDeclaration>
    </DeclareSalary>
</ns4:DeclareSalaryConsumer>
`;

export default BaseData;