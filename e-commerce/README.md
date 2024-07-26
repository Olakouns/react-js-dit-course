### boostrap => style : https://getbootstrap.com/
#### import 'bootstrap/dist/css/bootstrap.min.css'; import 'bootstrap/dist/js/bootstrap.bundle.min.js';
### boostrap-icon => boostrap-icon : https://icons.getbootstrap.com/
#### import 'bootstrap-icons/font/bootstrap-icons.min.css';
### skleton loader => loading pages (before showing data to the users)
#### https://www.npmjs.com/package/react-loading-skeleton
### axios => manage request : https://axios-http.com/docs/intro
### react-router-dom => navigation between pages
### best practice
#### env => metadata (api_url, api_key)
#### folder structure // react 


#### method
    - GET
    - POST
    - PUT
    - PATCH
    - OPTION
    - DELETE

##### env variable
###### prefix : REACT_APP_(ENV_VAR_NAME)

##### Routage
    - configuration ...
    - layout => global component -> display child components (pages) : ✅
    - get variables from URL:
        - Path variable : [products/{id_product}] =>  /products/1, /products/2,
        - Query params : [products?var1=...&var2=...]   => products?search=dit&size=10
    - display 404 page. : ✅