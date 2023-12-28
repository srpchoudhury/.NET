Oracle.Web Nuget Package Version 21.9.0 README
==============================================
Release Notes: Oracle Providers for ASP.NET

December 2022

This README supplements the main ODP.NET 21c documentation.
https://docs.oracle.com/en/database/oracle/oracle-database/21/aspnt/

TABLE OF CONTENTS
*New Features
*Installation and Configuration Steps
*Installation Changes
*Documentation Corrections and Additions
*Tips, Limitations, and Known Issues


New Features
============
None


Bug Fixes since Oracle Providers for ASP.NET NuGet Package 21.5.0
=================================================================
None.


Installation and Configuration Steps
====================================
The downloads are NuGet packages that can be installed with the NuGet Package Manager. These instructions apply 
to install Oracle Providers for ASP.NET.

1. Un-GAC and un-configure any existing Oracle ASP.NET provider 21 versions you have installed. 

2. In Visual Studio, open NuGet Package Manager from an existing Visual Studio project. 

3. Install the NuGet package from an OTN-downloaded local package source or from nuget.org.


   From Local Package Source
   -------------------------
   A. Click on the Settings button in the lower left of the dialog box.

   B. Click the "+" button to add a package source. In the Source field, enter in the directory location where the 
   NuGet package(s) were downloaded to. Click the Update button, then the Ok button.

   C. On the left side, under the Online root node, select the package source you just created. The ODP.NET NuGet 
   packages will appear.


   From Nuget.org
   --------------
   A. In the Search box in the upper right, search for the package with id, "Oracle.Web". Verify that the package 
   uses this unique ID to ensure it is the offical Oracle Providers for ASP.NET download.

   B. Select the package you wish to install.


4. Click on the Install button to select the desired NuGet package(s) to include with the project. Accept the 
license agreement and Visual Studio will continue the setup.

5. Open the web.config file to configure the ODP.NET connection string and local naming parameters 
(i.e. tnsnames.ora). Below is an example of configuring the local naming parameters:

  <oracle.manageddataaccess.client>
    <version number="*">
      <dataSources>
        <!-- Customize these connection alias settings to connect to Oracle DB -->
        <dataSource alias="SampleDataSource" descriptor="(DESCRIPTION=(ADDRESS=(PROTOCOL=tcp)(HOST=localhost)(PORT=1521))(CONNECT_DATA=(SERVICE_NAME=ORCL))) " />
      </dataSources>
    </version>
  </oracle.manageddataaccess.client>

After following these instructions, ODP.NET is now configured and ready to use.

NOTE: ODP.NET, Managed Driver comes with a platform specific assembly: Oracle.ManagedDataAccessIOP.dll (for Kerberos Support)

The Oracle.ManagedDataAccessIOP.dll assembly is ONLY needed if you are using Kerberos. Kerberos users will need 
to download MIT Kerberos for Windows 4.0.1 or higher from 
  http://web.mit.edu/kerberos/dist/ 
to utilize ODP.NET, Managed Driver's support of Kerberos.

This asssembly is located under
      packages\Oracle.ManagedDataAccess.<version>\bin\x64
and
      packages\Oracle.ManagedDataAccess.<version>\bin\x86
depending on the platform.

If your application requires this assembly, your Visual Studio project requires additional changes.

Use the following steps for your application to use the 64-bit version of Oracle.ManagedDataAccessIOP.dll:

1. Right click on the Visual Studio project.
2. Select Add -> New Folder.
3. Name the folder x64.
4. Right click on the newly created x64 folder.
5. Select Add -> Existing Item.
6. Browse to packages\Oracle.ManagedDataAccess.<version>\bin\x64 under your project solution directory.
7. Choose Oracle.ManagedDataAccessIOP.dll.
8. Click the 'Add' button.
9. Left click the newly added Oracle.ManagedDataAccessIOP.dll in the x64 folder.
10. In the properties window, set 'Copy To Output Directory' to 'Copy Always'.

For x86 targeted applications, name the folder x86 and add assemblies from the 
packages\Oracle.ManagedDataAccess.<version>\bin\x86 folder.

To make your application platform independent even if it depends on Oracle.ManagedDataAccessIOP.dll, 
create both x64 and x86 folders with the necessary assemblies added to them.



Installation Changes
====================
The following web.config entries are added by including Oracle Providers for ASP.NET NuGet package to your 
application:

1) Configuration Settings

The following entry is added to the web.config to configure the ASP.NET providers:

<configuration>
  <system.web>
    <membership defaultProvider="OracleMembershipProvider">
      <providers>
        <clear />
        <add name="OracleMembershipProvider" type="Oracle.Web.Security.OracleMembershipProvider, Oracle.Web, Version=4.122.21.1, Culture=neutral, PublicKeyToken=89b483f429c47342" connectionStringName="OraAspNetConString" applicationName="" enablePasswordRetrieval="false" enablePasswordReset="true" requiresQuestionAndAnswer="true" requiresUniqueEmail="false" passwordFormat="Hashed" maxInvalidPasswordAttempts="5" minRequiredPasswordLength="7" minRequiredNonalphanumericCharacters="1" passwordAttemptWindow="10" passwordStrengthRegularExpression="" />
      </providers>
    </membership>
    <profile enabled="true" defaultProvider="OracleProfileProvider">
      <providers>
        <clear />
        <add name="OracleProfileProvider" type="Oracle.Web.Profile.OracleProfileProvider, Oracle.Web, Version=4.122.21.1, Culture=neutral, PublicKeyToken=89b483f429c47342" connectionStringName="OraAspNetConString" applicationName="" />
      </providers>
    </profile>
    <roleManager enabled="true" defaultProvider="OracleRoleProvider">
      <providers>
        <clear />
        <add name="OracleRoleProvider" type="Oracle.Web.Security.OracleRoleProvider, Oracle.Web, Version=4.122.21.1, Culture=neutral, PublicKeyToken=89b483f429c47342" connectionStringName="OraAspNetConString" applicationName="" />
      </providers>
    </roleManager>
    <siteMap enabled="true" defaultProvider="OracleSiteMapProvider">
      <providers>
        <clear />
        <add name="OracleSiteMapProvider" type="Oracle.Web.SiteMap.OracleSiteMapProvider, Oracle.Web, Version=4.122.21.1, Culture=neutral, PublicKeyToken=89b483f429c47342" connectionStringName="OraAspNetConString" applicationName="" securityTrimmingEnabled="true" />
      </providers>
    </siteMap>
    <webParts>
      <personalization defaultProvider="OraclePersonalizationProvider">
        <providers>
          <clear />
          <add name="OraclePersonalizationProvider" type="Oracle.Web.Personalization.OraclePersonalizationProvider, Oracle.Web, Version=4.122.21.1, Culture=neutral, PublicKeyToken=89b483f429c47342" connectionStringName="OraAspNetConString" applicationName="" />
        </providers>
      </personalization>
    </webParts>
    <healthMonitoring enabled="true">
      <providers>
        <add name="OracleWebEventProvider" type="Oracle.Web.Management.OracleWebEventProvider, Oracle.Web, Version=4.122.21.1, Culture=neutral, PublicKeyToken=89b483f429c47342" connectionStringName="OraAspNetConString" buffer="true" bufferMode="OracleNotification" />
      </providers>
    </healthMonitoring>
    <sessionState mode="Custom" customProvider="OracleSessionStateStore">
      <providers>
        <clear />
        <add name="OracleSessionStateStore" type="Oracle.Web.SessionState.OracleSessionStateStore, Oracle.Web, Version=4.122.21.1, Culture=neutral,PublicKeyToken=89b483f429c47342" connectionStringName="OraAspNetConString" />
      </providers>
    </sessionState>
  </system.web>
</configuration>


2) Connection String

The following entry is added to allow a connection string to be set for Oracle Providers for ASP.NET. The 
connectionString attribute should be set with the "User Id", "Password", and "Data Source" for the database
server that the ASP.NET providers will be storing their data.

The following entry is added to enable the classes that are derived from DbContext to be associated with a connection 
string instead to associating the derived class with a connection string programmatically by passing it via its 
constructor. The name of "OracleDbContext" should be changed to the class name of your class that derives from DbContext. 
In addition, the connectionString attribute should be modified properly to set the "User Id", "Password", and 
"Data Source" appropriately with valid values.

<configuration>
  <connectionStrings>
    <clear />
    <add name="OraAspNetConString" connectionString=" " />
  </connectionStrings>
</configuration>



Documentation Corrections and Additions
=======================================
None


Tips, Limitations, and Known Issues
===================================
None

 Copyright (c) 2021, 2022, Oracle and/or its affiliates. 
