## An apache2 virtural host file template for Ubuntu and Debain

```
<VirtualHost *:80>
ServerAdmin admin@111.11.11.11
DocumentRoot /var/www/html/new_site/
ServerName 111.11.11.11
ServerAlias 111.11.11.11
<Directory /var/www/html/new_site/>
Options FollowSymLinks
AllowOverride All
</Directory>
ErrorLog /var/log/apache2/test_site-error_log
CustomLog /var/log/apache2/test_site-access_log common
</VirtualHost>
```
### Steps to get the site up and running
1. Create a new site directory in /var/www/html/
1. Copy all site files to the new directory (e.g. /var/www/html/'new_site'/)
2. Create a new file in /etc/apache2/sites-available/ using the '.conf' extension (e.g. file_name.conf)
3. Copy the code above into the new file, replacing 'new_site' with the name of the new site directory created in step 1 and the IP address (e.g. 111.11.11.11) with the IP of your server
4. run *sudo a2ensite file_name.conf* to enable the site configuration
5. run *sudo service apache2 reload* to restart the server

* run *sudo a2dissite file_name.conf* to disable the site, making sure to restart the server following this command
