import {
  ApplicationRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {IBlog, ILike, IUser} from "../../shared/interfaces";
import {ActivatedRoute, Router} from "@angular/router";
import {LikeService} from "../like.service";

@Component({
  selector: 'app-like-button',
  templateUrl: './like-button.component.html',
  styleUrls: ['./like-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LikeButtonComponent implements OnChanges {
  @Input() isLiked: ILike | undefined;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private likeService: LikeService,
    private changeDetection: ApplicationRef,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
  }
}
