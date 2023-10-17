import {Link} from  "react-router-dom";
function Edit() {
    return (
        <div class="wd-flex-row-container">

    <div class="d-none d-md-block">
      <link rel="stylesheet" href="/styles.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="/vendors/bootstrap/bootstrap.min.css" />

      
    </div>
    <div class="d-none d-md-block">
      <link rel="stylesheet" href="/styles.css" />
      <link rel="stylesheet" href="/kanbas/Courses/CourseNavigation/index.css" />
      <ul class="wd-course-navigation">
        <li><a href="#">Notifications</a></li>
        <li class="wd-active"><a href="/Kanbas/Account/Profile/index.html">Profile</a></li>
        <li><a href="#">Files</a></li>
        <li><a href="/Kanbas/Courses/Settings/Details/screen.html">Settings</a></li>
        <li><a href="#">ePortfolios</a></li>
        <li><a href="#">Shared Content</a></li>
        <li><a href="#">The Hub</a></li>
        <li><a href="#">Qwickly Course Tools</a></li>
        <li><a href="#">Global Announcements</a></li>
      </ul>
    </div>
    <div class="wd-flex-grow-1">
      <div class="wd-header-container">


        <i class="fa-regular fa-user fa-10x"></i>
        <Link to={`/Kanbas/Account`} className="list-group-item btn btn-secondary float-end wd-edit-button"><i class="fa-solid fa-pencil"></i>Cancel</Link>
      </div>
      <h1>Samuel Tomlinson</h1>

      <label>Name:*</label> <input class='form-control' type="text" name="name" value="Samuel Tomlinson" />
      <label>Pronouns:</label>
      <select>
        <option value="Edit">He/him</option>
      </select>
      <br />
      <label>Title:</label><input class='form-control' type="text" name="name" value="Samuel Tomlinson" />

      <h2>Contact</h2>
      <div>No reigstered services, you can add some on the <a href="#">settings</a> page.</div>
      <h2>Contact</h2>
      <div>No reigstered services, you can add some on the <a href="#">settings</a> page.</div>
      <h2>Biography</h2>
      <textarea  class='form-control'>Student, Software Engineer, AI, Space</textarea>
      <h2>Links</h2>
      <div class="container wd-link-container">
        <div class="row">
          <div class="col">Title</div>
          <div class="col">URL</div>
          <div class="col"></div>
          <div class="w-100"></div>
          <div class="col"><input type="text" name="name" value="Youtube" /></div>
          <div class="col"><input type="text" name="name" value="www.youtube.com" /></div>
          <div class="col"><a href="#">Remove</a></div>
          <div class="w-100"></div>
          <div class="col"><button class="btn btn-secondary">Add another link</button></div>
          <div class="w-100"></div>
          <div class="col"><Link to={`/Kanbas/Account`} className="list-group-item btn btn-secondary  wd-edit-button"><i class="fa-solid fa-pencil"></i>Cancel</Link></div>
          <div class="col"><Link to={`/Kanbas/Account`} className="list-group-item btn btn-danger wd-edit-button"><i class="fa-solid fa-pencil"></i>Save Profile</Link></div>
          <div class="col"></div>
        </div>
      </div>
    </div>

  </div>
    );
}

export default Edit;