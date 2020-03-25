import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Catalogo   } from './Catalogo';
import { areas } from './area.json.js';
import { secciones  } from './seccion.json.js';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  /**
   * Regresa todos los catalogos de la base de datos.
   * @param url URL de End Point.
   */
  getCatalogos(url: string): Observable<Catalogo []> {
    return this.http.get<Catalogo []>(url);
  }

  /**
   * Regresa un catalogo.
   * @param url URL de End Point con identificador.
   */
  getCatalogo(url: string): Observable<Catalogo> {
    return this.http.get<Catalogo>(url);
  }

  /**
   * Regresa un arreglo de Catalogos de a cuerdo a las opciones de busqueda.
   * @param url URL de End Point.
   * @param opciones Objeto con las opciones 
   * @alias { descripcion?: string, fechaAlta?: Date, fechaModificacion?: Date, idEstatusCatalogo: number }
   */
  getCatalogosBusqueda(url: string, opciones: any): Observable<Catalogo []>{
    return this.http.post<Catalogo []>(url, opciones);
  }

  /**
   * Agrega nuevo Catalogo.
   * @param url URL de End Point
   * @param descripcion String con la descripción del catalogo.
   */
  postCatalogo(url: string, descripcion: string) {
    const opciones = { descripcion, idUsuarioAlta: 1 };
    return this.http.post<Catalogo>(url, opciones);
  }

  /**
   * Actualiza el Catalogo completamente.
   * @param url URL de End Point.
   * @param catalogo Catalogo ya modificado.
   */
  putCatalogo(url: string, catalogo: Catalogo) {
    return this.http.put<boolean>(url, catalogo);
  }

  /**
   * Actualiza el estatus del catalogo.
   * @param url URL de End Point.
   * @param catalogo Catalogo con el estatus modificado.
   */
  patchCatalogo(url: string, catalogo: Catalogo) {
    return this.http.put<boolean>(url, catalogo);
  }

  /**
   * Elimina un catalogo de la base de datos.
   * @param url URL con el idenificadro del Catalogo a eliminar
   */
  deleteCatalogo(url: string) {
    return this.http.delete(url);
  }

// ********************************************************************* //
// Cotiene datos de la primer version                                    /

  // private areas: Catalogo[];
  // private secciones: Catalogo[];
  
  // constructor() {
  //   this.area = areas;
  //   this.seccion = secciones;
  //  }


  // getArea(url: string): Observable<Catalogo []> {
  //   return this.http.get<Catalogo []>(url);
  // }

  // getSeccion(url: string): Observable<Catalogo []> {
  //   return this.http.get<Catalogo []>(url);
  // }

  // postArea(url: string, descripcion: string) {
  //   const jsonArea = {
  //       descripcion,
  //       idUsuarioAlta: this.usuario
  //   };
  //   return this.http.post<Catalogo>(url, jsonArea);
  // }

  // postSeccion(url: string, descripcion: string): Observable<Catalogo>{
  //   const jsonSeccion = {
  //       descripcion,
  //       idUsuarioAlta: this.usuario,
  //     };
  //   return this.http.post<Catalogo>(url, jsonSeccion);
  // }

  // deleteSeccion(url: string, id: string) {
  //   // const httpParams = new HttpParams().set('id', id);
  //   const options = { params: new HttpParams().set('id', id) };
  //   return this.http.delete(url, options);
  // }

 
  // actualizaTArea(): Observable<Catalogo> {
  //   return of(this.area);
  // }

  // actualizaArea(area: Catalogo): Observable<Catalogo> {
  //   this.area = area;
  //   return of(this.area);
  // }



  // getArea(): Observable<Catalogo[]>{
  //   return of(this.area);
  // }

  // postArea(area: Catalogo): Observable<Catalogo[]> {
  //   this.area.push(area);
  //   return of(this.area);
  // }

  // postSecciones(seccion: Catalogo) {
  //   this.seccion.push(seccion);
  //   return of(this.area);
  // }

}
