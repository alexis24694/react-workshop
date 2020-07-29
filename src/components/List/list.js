import React from 'react';
import './list.css';

function List() {
    return (
        <div className="container">
          <div class="py-5 text-center">
              <h2>Listado con Búsqueda</h2>
          </div>
          <div className="md-0">
            <form class="form-inline mt-2 mt-md-0">
              <input class="form-control mr-sm-2" type="text" placeholder="Buscar" aria-label="Buscar"/>
              <button class="btn btn-outline-secondary my-2 my-sm-0" type="submit">Buscar</button>
            </form>
          </div>
          <div class="table-responsive">
            <table class="table table-striped table-sm table-hover">
            <thead>
              <tr>
                <th></th>
                <th>Header</th>
                <th>Header</th>
                <th>Header</th>
                <th>Header</th>
                <th>Header</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><input type="checkbox" id="checkbox1" class="form-check-input"/></td>
                <td>1,001</td>
                <td>Lorem</td>
                <td>ipsum</td>
                <td>dolor</td>
                <td>sit</td>
                <td>
                  <span title="Borrar">
                    <button type="button" class="close" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>       
                  </span>           
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" id="checkbox2" class="form-check-input"/></td>
                <td>1,002</td>
                <td>amet</td>
                <td>consectetur</td>
                <td>adipiscing</td>
                <td>elit</td>
                <td>
                  <span title="Borrar">
                    <button type="button" class="close" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>       
                  </span>           
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" id="checkbox3" class="form-check-input"/></td>
                <td>1,003</td>
                <td>Integer</td>
                <td>nec</td>
                <td>odio</td>
                <td>Praesent</td>
                <td>
                  <span title="Borrar">
                    <button type="button" class="close" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>       
                  </span>           
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" id="checkbox4" class="form-check-input"/></td>
                <td>1,003</td>
                <td>libero</td>
                <td>Sed</td>
                <td>cursus</td>
                <td>ante</td>
                <td>
                  <span title="Borrar">
                    <button type="button" class="close" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>       
                  </span>           
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" id="checkbox5" class="form-check-input"/></td>
                <td>1,004</td>
                <td>dapibus</td>
                <td>diam</td>
                <td>Sed</td>
                <td>nisi</td>
                <td>
                  <span title="Borrar">
                    <button type="button" class="close" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>       
                  </span>           
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" id="checkbox6" class="form-check-input"/></td>
                <td>1,005</td>
                <td>Nulla</td>
                <td>quis</td>
                <td>sem</td>
                <td>at</td>
                <td>
                  <span title="Borrar">
                    <button type="button" class="close" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>       
                  </span>           
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" id="checkbox7" class="form-check-input"/></td>
                <td>1,006</td>
                <td>nibh</td>
                <td>elementum</td>
                <td>imperdiet</td>
                <td>Duis</td>
                <td>
                  <span title="Borrar">
                    <button type="button" class="close" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>       
                  </span>           
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" id="checkbox8" class="form-check-input"/></td>
                <td>1,007</td>
                <td>sagittis</td>
                <td>ipsum</td>
                <td>Praesent</td>
                <td>mauris</td>
                <td>
                  <span title="Borrar">
                    <button type="button" class="close" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>       
                  </span>           
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" id="checkbox9" class="form-check-input"/></td>
                <td>1,008</td>
                <td>Fusce</td>
                <td>nec</td>
                <td>tellus</td>
                <td>sed</td>
                <td>
                  <span title="Borrar">
                    <button type="button" class="close" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>       
                  </span>           
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" id="checkbox10" class="form-check-input"/></td>
                <td>1,009</td>
                <td>augue</td>
                <td>semper</td>
                <td>porta</td>
                <td>Mauris</td>
                <td>
                  <span title="Borrar">
                    <button type="button" class="close" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>       
                  </span>           
                </td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
    );
}

export default List;